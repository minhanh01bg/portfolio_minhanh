# Thêm nút chuyển giao diện sáng/tối bên dưới avatar

- **ID:** PLAN-001
- **Ngày tạo:** 2026-03-25
- **Trạng thái:** draft
- **Phạm vi:** UI/UX, Accessibility, Frontend (Next.js)

## Mục tiêu

Thêm một nút chuyển chế độ **Light / Dark** đặt **ngay bên dưới avatar** trong khối thông tin sidebar, đảm bảo đồng bộ giữa desktop và mobile, không phá vỡ phong cách hiện tại.

## Vị trí ảnh hưởng

1. `src/components/Sidebar.tsx`
   - Khối `InfoCard` là nơi đang chứa avatar + tên + tag.
   - Nút toggle sẽ nằm dưới cụm avatar/tên (trước hoặc sau tags, ưu tiên ngay sau phần tên để nổi bật).
2. `src/app/layout.tsx` hoặc `src/app/page.tsx` (nếu cần provider)
   - Xác nhận nơi bọc app và chèn `ThemeProvider` nếu chưa có.
3. `src/app/globals.css`
   - Kiểm tra biến màu đang dùng (`--background`, `--foreground`) đã phản ánh theo class theme chưa.

## Cách triển khai đề xuất

### 1) Chọn cơ chế theme

- Dùng `next-themes` (khuyến nghị cho Next.js App Router).
- Lưu lựa chọn vào `localStorage` để giữ trạng thái sau khi reload.
- Hỗ trợ theo system preference (`system`) làm fallback.

### 2) Bọc ThemeProvider ở root

- Bọc toàn app bằng provider, cấu hình qua class trên `html`.
- Bật `disableTransitionOnChange` để tránh nháy mạnh khi đổi theme.

### 3) Tạo UI toggle

- Tạo component riêng (đề xuất: `src/components/ThemeToggle.tsx`) để dễ tái sử dụng.
- Dùng icon mặt trời/mặt trăng + label ngắn (`Light`, `Dark`).
- Trạng thái active rõ ràng bằng màu nền/viền.
- Gắn `aria-label` và `aria-pressed` để thân thiện accessibility.

### 4) Đặt toggle bên dưới avatar

- Trong `InfoCard` của `Sidebar.tsx`, chèn `<ThemeToggle />` ngay dưới phần tên/chức danh.
- Giữ khoảng cách hợp lý (`mt-2` / `mt-3`) để không dính với tags.
- Đảm bảo hiển thị tốt trên mobile drawer và desktop sidebar (vì cùng dùng `InfoCard`).

### 5) Tinh chỉnh style theo theme

- Soát lại các class hard-coded nền tối trong sidebar (`bg-[#05060d]`, text trắng cứng).
- Chuyển dần sang token/biến hoặc class có dark/light tương ứng để chế độ sáng nhìn đúng.

### 6) Kiểm thử

- Functional:
  - Click đổi theme hoạt động.
  - Reload trang vẫn nhớ theme đã chọn.
- UI:
  - Vị trí đúng dưới avatar.
  - Không vỡ layout ở mobile/tablet/desktop.
- A11y:
  - Có thể tab focus đến nút.
  - Có nhãn đọc được bởi screen reader.

## Checklist triển khai

- [ ] Cài và cấu hình `next-themes`.
- [ ] Thêm `ThemeProvider` ở root app.
- [ ] Tạo `ThemeToggle` component.
- [ ] Gắn toggle vào `InfoCard` trong `Sidebar.tsx`.
- [ ] Rà soát class màu để sáng/tối nhất quán.
- [ ] Test responsive + persisted state + accessibility.

## Rủi ro & cách giảm thiểu

1. **Hydration mismatch** khi đọc theme phía client.
   - Giảm thiểu: dùng `mounted` check trước khi render state-dependent icon/label.
2. **Màu sáng chưa đồng bộ** do hiện tại nhiều class tối hard-code.
   - Giảm thiểu: chuẩn hóa dần qua CSS variables và class `dark:`.
3. **Nút toggle chìm trong nền gradient InfoCard.**
   - Giảm thiểu: tăng contrast viền/nền và hover/focus rõ ràng.

## Tiêu chí hoàn thành

- Toggle xuất hiện chính xác bên dưới avatar trong sidebar.
- Đổi theme mượt, không lỗi hydration.
- Theme giữ nguyên sau refresh.
- Bố cục tổng thể không bị lệch trên mobile + desktop.
- Đạt mức a11y cơ bản cho control tương tác.
