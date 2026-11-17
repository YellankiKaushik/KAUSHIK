import { ArrowRight, AudioLines, ChartNoAxesColumnIncreasing, GitFork, Leaf, ListChecks, ScanFace } from "lucide-react";
import type { ProjectStory } from "@/data/projectStories";

const icons = { farm: Leaf, video: ChartNoAxesColumnIncreasing, voice: AudioLines, navigation: GitFork, civic: ListChecks, member: ScanFace };

export default function ProjectVisual({ story }: { story: ProjectStory }) {
  const Icon = icons[story.theme];
  return (
    <figure className="architecture" data-theme={story.theme}>
      <Icon className="architecture-icon" aria-hidden="true" strokeWidth={1.1} />
      <figcaption>Architecture illustration</figcaption>
      <ol>
        {story.flow.map((step, index) => (
          <li key={step}><span>{step}</span>{index < story.flow.length - 1 && <ArrowRight aria-hidden="true" />}</li>
        ))}
      </ol>
    </figure>
  );
}
