 
import Aside from "../components/Aside";
import WebsiteGrid from "../components/WebsiteGrid";
import ContactForm from "../components/ContactForm";

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-1">
            {/* //*ASIDE */}
      <section id="index-margin" className="col-span-1 2xl:pr-4">
             <Aside />
           </section>

            {/* //*WEBSITE GRID */}
           <section
            id="index-margin"
            className="bg-seasalt 2xl:col-span-3 lg:col-span-2 overflow-auto border-l border-b border-black lg:border-r-2 md:border-r-2 sm:border-r-2"
          >
            <div className="2xl:px-[100px] py-[20px] lg:pl-5 pr-5">
              
                {/* //todo LEARN TS REGARDING WEBSITE GRID*/}
              <WebsiteGrid title={undefined} description={undefined} madeWith={undefined} listItem2={undefined} />
              <div id="contact" className="2xl:w-1/2 sm:w-full p-5 mt-[150px]">
                <h2 className="text-3xl">Contact</h2>
                <p>
                  Has my portfolio piqued your interest....? If so, you can
                  contact me at devdesignsbyelsa@gmail.com Looking forward to
                  hearing from you!
                </p>
                <ContactForm />
         
              </div>
            </div>
          </section>
    </div>
    </div>
  )
}


 