import { CornerRightUp } from "lucide-react";
import { ModeToggle } from "./components/custom/ModeToggle";
import { ThemeProvider } from "./components/custom/ThemeProvider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="poppins-400">
      <ThemeProvider defaultTheme="violet-light" storageKey="vite-ui-theme">
        <div className="fixed right-4 top-4">
          <ModeToggle />
        </div>
        {/*
         MAKE SURE TO PROVIDE THE COLOR/background like bg-background, bg-foreground, text-background
         you would understand it if you start working in it 
         you can use every variable you provided in index.css file like this bg-<variablename> ========> bg-primary/bg-secondary/bg-background ....
         because of the modified styling by shadcn/ui watch the tailwind.config.js you would understand this i think..
         */}
        <div className="bg-background h-screen flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold">Efficient Project Management</h1>
          <p className="mb-5">Optimize your workflow and achieve your goals</p>
          <div className="space-x-3">
            <Button size="lg">
              Learn More <CornerRightUp size={20} className="ml-5 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline">
              Download Resume/CV
            </Button>
          </div>
        </div>
        <div className="w-full h-screen p-10 items-center justify-center flex bg-secondary ">
          <ul>
            <h1 className="text-3xl font-bold text-center mb-5">Points</h1>
            <li>⚫ make sure to read the docs do whatever it said instead of creating tsconfig.json create jsconfig.json  - <b>https://ui.shadcn.com/docs/installation/vite</b></li>
            <li> ⚫ you can generate the custom shadcn/ui theme using the offical site or you can use this site to make you own by defined rules -<b> https://gradient.page/tools/shadcn-ui-theme-generator</b></li>
            <li> ⚫ make sure to view the custom <b>ModeToggle,ThemeProvider Component & index.css</b> file</li>
            <li> ⚫ must use the shadcn/ui provide classes </li>
          </ul>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
