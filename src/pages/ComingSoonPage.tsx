const ComingSoonPage = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center p-4 transition-colors duration-200">
      {/* Main Content */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-foreground">Coming Soon</h1>

        <p className="text-xl mb-8 text-muted-foreground">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
