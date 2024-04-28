import { CircularProgress, CircularProgressLabel, Progress } from "@chakra-ui/react"

const Skills = () => {
    return (
            <section id="Skills">


        <div className="   max-h-full mb-20 ">
            <div className="text-5xl text-center bg-slate-500 p-2 rounded sm:text-center">Skills</div>
            <div className="flex justify-center mt-10 lg:justify-between px-40 gap-10 ">

                <div>
                    <p className=" text-2xl text-center mb-4 ">HTML</p>
                    <CircularProgress size="120px" value={90} color='orange' >
                        <CircularProgressLabel>90%</CircularProgressLabel>

                    </CircularProgress>
                </div>

                <div>
                    <p className=" text-2xl text-center mb-4"> CSS</p>
                    <CircularProgress size="120px" value={80} color='orange' >
                        <CircularProgressLabel>80%</CircularProgressLabel>

                    </CircularProgress>
                </div>
            </div>
            <div className="flex justify-center mt-10 lg:justify-between px-40 gap-10 ">


                <div>
                    <p className=" text-2xl text-center mb-4 ">Tailwind </p>
                    <CircularProgress size="120px" value={70} color='orange' >
                        <CircularProgressLabel>70%</CircularProgressLabel>

                    </CircularProgress>
                </div>

                <div>
                    <p className=" text-2xl text-center  mb-4">Next.js</p>
                    <CircularProgress size="120px" value={60} color='orange' >
                        <CircularProgressLabel>60%</CircularProgressLabel>

                    </CircularProgress>
                </div>







            </div>

        </div>


            </section>
    )
}
export default Skills