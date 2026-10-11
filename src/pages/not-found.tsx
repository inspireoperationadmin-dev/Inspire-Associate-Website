import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-5 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist or may have moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="/">Back to home</a>
        </Button>
      </div>
    </main>
  );
}
