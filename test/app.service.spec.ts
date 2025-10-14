import { AppService } from '@/app.service';

describe('AppService', () => {
  it('getHello deve conter Hello', () => {
    const svc = new AppService();
    expect(svc.getHello()).toContain('Hello');
  });
});
