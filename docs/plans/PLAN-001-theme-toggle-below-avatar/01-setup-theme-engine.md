# 01 — Setup theme engine

- **Parent:** PLAN-001
- **Trạng thái:** draft
- **Ưu tiên:** High

## Mục tiêu

Thiết lập nền tảng chuyển theme Light/Dark ổn định cho app bằng `next-themes`.

## File dự kiến ảnh hưởng

- `package.json`
- `src/app/layout.tsx` (hoặc nơi root provider)

## Checklist

- [ ] Cài `next-themes`.
- [ ] Tạo/đặt `ThemeProvider` ở root app.
- [ ] Cấu hình `attribute="class"`.
- [ ] Bật `disableTransitionOnChange`.
- [ ] Xác minh app render bình thường sau khi bọc provider.

## Rủi ro chính

- Hydration warning do render theme-dependent trước khi mount.

## Tiêu chí hoàn thành

- Không có lỗi runtime khi thêm provider.
- Có thể đọc/đổi theme thông qua context từ client component.
