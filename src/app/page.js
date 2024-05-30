import ParticlesComponent from "@/Particles";
import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <main className="App h-screen">
        <ParticlesComponent id="particles"/>
      <div>
        <Quiz />
      </div>
    </main>
  );
}
