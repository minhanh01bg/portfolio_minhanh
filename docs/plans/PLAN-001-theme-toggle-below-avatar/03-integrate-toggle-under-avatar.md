# 03 — Integrate toggle dưới avatar

- **Parent:** PLAN-001
- **Trạng thái:** draft
- **Ưu tiên:** High

## Mục tiêu

Đặt `ThemeToggle` đúng vị trí bên dưới avatar trong `InfoCard` của Sidebar.

## File dự kiến ảnh hưởng

- `src/components/Sidebar.tsx`

## Checklist

- [ ] Import `ThemeToggle` vào `Sidebar.tsx`.
- [ ] Chèn toggle ngay dưới cụm avatar/tên.
- [ ] Căn spacing hợp lý với tags.
- [ ] Kiểm tra hiển thị ở cả mobile drawer & desktop sidebar.

## Rủi ro chính

- Bố cục bị chật trên màn nhỏ.

## Tiêu chí hoàn thành

- Toggle luôn nằm đúng dưới avatar (không lệch vị trí giữa mobile/desktop).
