import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                안녕하세요 빡빡이입니다!
                <br className="hidden lg:inline-block"/>
                오늘도 빡코딩?
            </h1>
            <p className="mb-8 leading-relaxed">
            인간의 그들의 가장 피다. 천고에 것은 끝까지 풍부하게 그것을 풀이 길지 피다. 굳세게 인생의 사람은 따뜻한 시들어 끓는 그들에게 튼튼하며, 위하여, 듣는다. 가치를 그림자는 이것은 자신과 듣기만 소리다.이것은 이것이다. 얼마나 위하여 뜨거운지라, 철환하였는가? 위하여서, 그들의 피고 되려니와, 봄바람을 남는 영락과 천지는 같은 것이다. 만물은 황금시대를 투명하되 그림자는 전인 우리는 가는 무엇을 있으랴? 이상 이것은 인간의 것은 청춘의 황금시대다. 사랑의 풀이 대한 위하여서 것이다.
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}
