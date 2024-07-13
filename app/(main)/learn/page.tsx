import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import Header from "./header";
import UserProgress from "@/components/user-progress";

const LearnPage = () => {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Search"></Header>
        <div className="space-y-4">
          <div></div>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        ></UserProgress>
      </StickyWrapper>
    
    </div>
  );
};

export default LearnPage;
