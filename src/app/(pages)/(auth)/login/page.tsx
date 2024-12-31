import HeroSection from './components/hero-section';
import FormSection from './components/form-section';

export default function LoginPage() {
  return (
    <main className={'h-screen min-h-[650px]'}>
      <div className={'flex h-full'}>
        <HeroSection />
        <FormSection />
      </div>
    </main>
  );
}
