# Hướng dẫn Publish Package lên NPM

## Bước 1: Đăng ký tài khoản NPM

1. Truy cập [npmjs.com](https://www.npmjs.com)
2. Click "Sign Up" để tạo tài khoản mới
3. Xác thực email của bạn

## Bước 2: Đăng nhập vào NPM từ terminal

```bash
npm login
```

Nhập username, password và email của bạn.

## Bước 3: Cập nhật thông tin package

Trước khi publish, bạn cần cập nhật một số thông tin trong `package.json`:

1. **Thay đổi tên package**: Đổi `@your-username/string-utils` thành tên package của bạn
2. **Cập nhật author**: Thay thế thông tin author
3. **Cập nhật repository**: Thay thế URL repository của bạn
4. **Cập nhật homepage**: Thay thế URL homepage

Ví dụ:
```json
{
  "name": "@your-username/string-utils",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/string-utils.git"
  },
  "homepage": "https://github.com/your-username/string-utils#readme"
}
```

## Bước 4: Kiểm tra package trước khi publish

```bash
# Kiểm tra package sẽ được publish
npm pack

# Xem nội dung package
tar -tzf your-username-string-utils-1.0.0.tgz
```

## Bước 5: Publish package

### Publish lần đầu:
```bash
npm publish
```

### Publish với scope (nếu dùng @username/package-name):
```bash
npm publish --access public
```

## Bước 6: Kiểm tra package đã được publish

1. Truy cập [npmjs.com](https://www.npmjs.com)
2. Tìm kiếm package của bạn
3. Kiểm tra thông tin package

## Bước 7: Cập nhật version và republish

Khi cần cập nhật package:

```bash
# Cập nhật version (patch, minor, major)
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Publish version mới
npm publish
```

## Lưu ý quan trọng:

1. **Tên package phải unique**: Không thể trùng với package đã tồn tại
2. **Version không thể giảm**: Một khi đã publish version 1.0.0, không thể publish lại 0.9.0
3. **Scoped packages**: Nếu dùng @username/package-name, cần thêm `--access public`
4. **Two-factor authentication**: NPM có thể yêu cầu 2FA cho security

## Troubleshooting:

### Lỗi "Package name already exists":
- Thay đổi tên package trong `package.json`
- Hoặc sử dụng scoped package: `@your-username/package-name`

### Lỗi "Version already exists":
- Tăng version trong `package.json`
- Hoặc sử dụng `npm version patch/minor/major`

### Lỗi authentication:
```bash
npm logout
npm login
```

## Sau khi publish thành công:

Người dùng có thể cài đặt package của bạn bằng:

```bash
npm install @your-username/string-utils
```

Và sử dụng như đã hướng dẫn trong README.md
