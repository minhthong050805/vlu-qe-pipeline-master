const login = require('./auth');

describe('Regression Test Suite', () => {
  test('Đăng nhập đúng trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('Sai mật khẩu trả về false', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('Username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Password chứa ký tự đặc biệt trả về false', () => {
    expect(login('admin', '123@#$')).toBe(false);
  });

  test('Username không tồn tại trả về false', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });
});
