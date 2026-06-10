import { useMemo, useState } from "react";
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MdDragIndicator } from "react-icons/md";

/**
 * A drag-to-rearrange bento grid.
 *
 * - `items`: [{ id, span, dark?, render() }]. `span` holds the grid-span
 *   classes; `render` returns the tile content (a BentoCard with h-full).
 * - Order lives in component state only, so a refresh restores the initial
 *   arrangement (by design).
 * - Each tile keeps its size and the grid uses dense flow, so the layout
 *   stays tidy after rearranging.
 */
const SortableTile = ({ id, span = "", dark = false, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleTone = dark
    ? "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
    : "bg-content/[0.06] text-content/50 hover:bg-content/10 hover:text-content";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group/tile relative ${span} ${
        isDragging ? "z-50" : ""
      }`}
    >
      {/* Drag handle — visible on hover (always visible on touch). */}
      <button
        type="button"
        aria-label="Drag to rearrange"
        {...attributes}
        {...listeners}
        className={`absolute right-3 top-3 z-20 flex h-8 w-8 touch-none cursor-grab items-center justify-center rounded-full opacity-100 backdrop-blur transition active:cursor-grabbing md:opacity-0 md:group-hover/tile:opacity-100 ${handleTone}`}
      >
        <MdDragIndicator size={18} />
      </button>

      <div
        className={`h-full transition-[transform,box-shadow] duration-200 ${
          isDragging
            ? "scale-[1.02] shadow-[0px_24px_50px_-20px_rgba(0,0,0,0.45)]"
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const SortableGrid = ({ items, className = "" }) => {
  const [order, setOrder] = useState(() => items.map((i) => i.id));
  const byId = useMemo(
    () => Object.fromEntries(items.map((i) => [i.id, i])),
    [items]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const onDragEnd = ({ active, over }) => {
    if (over && active.id !== over.id) {
      setOrder((prev) =>
        arrayMove(prev, prev.indexOf(active.id), prev.indexOf(over.id))
      );
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={order} strategy={rectSortingStrategy}>
        <div className={className}>
          {order.map((id) => {
            const item = byId[id];
            if (!item) return null;
            return (
              <SortableTile
                key={id}
                id={id}
                span={item.span}
                dark={item.dark}
              >
                {item.render()}
              </SortableTile>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableGrid;
