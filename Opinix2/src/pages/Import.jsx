import "../css/Import.css"
import Header from "../components/Header";

function Import(){
    
    return(
        <>
        <header>
            <Header/>
        </header>
        <div className="import-div">
            <form action="upload.java" method="post" enctype="multipart/form-data">
                Select file to upload:
                <input type="file" name="fileToUpload" id="fileToUpload"/>
                <input type="submit" value="Upload File" name="submit"/>
            </form>
        </div>
        </>
    )
}

export default Import;