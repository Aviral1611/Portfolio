import { CONTACT } from "../constants";
import {motion} from "framer-motion"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
             className="my-10 text-center text-4xl ">
                Get in touch
            </motion.h1>
            <div className="text-center tracking-tighter mb-10">
                <motion.p
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                 className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.p
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className="border-b border-neutral-900 p-4 mb-5">
                    {CONTACT.email}
                </motion.p>
            </div>
        </div>
    )
}

export default Contact;