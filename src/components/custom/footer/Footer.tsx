import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} AnimeInfo. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
