import ContentType from "@/app/types/contentType";

const Log = ({data}: {data: ContentType}) => {
    return (
        <details className="">
            <summary className="flex flex-col appearance-none list-none">
                <div className="flex justify-between text-primaryGreen">
                    <p>{data.date}</p>
                    <p>{data.tag}</p>
                </div>
                <div className="flex flex-col">
                    <p>{data.summary}</p>
                    <p>{data.content.substring(0, 50)}</p>
                    <div>

                    </div>
                </div>
            </summary>
            <p>{data.content}</p>
        </details>
    )
}

export default Log;