import Blog from "@/components/Blog";
import CaseStudies from "@/components/casestudies";
import Divisions from "@/components/Divisions";
import Header from "@/components/Header";
import IntroductionText from "@/components/IntroductionText";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <IntroductionText/>
      <Divisions/>
      <CaseStudies/>
      <Blog/>
    </div>
  );
}
