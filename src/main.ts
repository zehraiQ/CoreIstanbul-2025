import { platformBrowser } from '@angular/platform-browser';
import { AuthModule } from './app/auth/auth.module';

platformBrowser().bootstrapModule(AuthModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
