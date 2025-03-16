import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CustomHeraderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const CustomHerader = ({
  searchTerm,
  setSearchTerm,
}: CustomHeraderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border py-4 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-primary">AnimeInfo</h1>
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar anime..."
                className="pl-8 w-full text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
