import {newArrivalCategoryLabels} from '../const/homePageData';
import type {Course} from '../types/course';

function normalize(q: string) {
  return q.trim().toLowerCase();
}

export function filterCoursesByQuery(courses: Course[], query: string) {
  const q = normalize(query);
  if (!q) return courses;
  return courses.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.level.toLowerCase().includes(q) ||
      (c.description?.toLowerCase().includes(q) ?? false) ||
      (c.instructor?.toLowerCase().includes(q) ?? false)
  );
}

export function filterNewArrivalsByQuery(items: Course[], query: string) {
  const q = normalize(query);
  if (!q) return items;
  return items.filter((c) => {
    const categoryLabel = (newArrivalCategoryLabels[c.category] ?? c.category).toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.level.toLowerCase().includes(q) ||
      categoryLabel.includes(q) ||
      (c.instructor?.toLowerCase().includes(q) ?? false) ||
      (c.promoBadge?.toLowerCase().includes(q) ?? false)
    );
  });
}
