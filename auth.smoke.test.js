const login = require('./auth');

test('Smoke: Đăng nhập đúng tài khoản admin/123 trả về true', () => {
  expect(login('admin', '123')).toBe(true);
});
