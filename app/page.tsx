import Blog from "@/components/Blog";
import CaseStudies from "@/components/casestudies";
import Divisions from "@/components/Divisions";
import IntroductionText from "@/components/IntroductionText";

export default function Home() {
  return (
    <div className="">
      
      <IntroductionText/>
      <Divisions/>
      <CaseStudies/>
      <Blog/>
    </div>
  );
}
