import {CERTIFICATIONS} from "../constants/index"

const Certifications = () => {
    return (
        <div className=" border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Certifications</h1>
            <div>
                {CERTIFICATIONS.map((certificate,index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/3">
                                <img src={certificate.image} width={250} height={250} alt={certificate.title} className="mb-6 rounded" /> 
                            </div>
                            <div className="w-full max-w-xl lg:w-1/2">
                                <h6 className="mb-3 font-semibold">{certificate.title}</h6>
                                <p className="mb-3 text-neutral-400">{certificate.description}</p>
                                <p className="mb-3 text-neutral-500">{certificate.date}</p>
                                {certificate.technologies.map((tech,index) => (
                                    <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}
                                    </span>
                                )
                            )}
                            </div>
                        </div>
                ))}
            </div>
        </div>

    )
}

export default Certifications; 