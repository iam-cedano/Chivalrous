import FullScreenDialog from "@/pages/shared/components/FullScreenDialog";
import SingleServiceResponse from "../../api/res/SingleServiceResponse";

type AddingServiceProps = {
    service: SingleServiceResponse;
    onClose: () => void
};

function AddingServiceDialog({ service, onClose }: AddingServiceProps) {
    return (
        <FullScreenDialog onClose={onClose}  title="Adding Service">
            <img src="" alt="Banner Image" />
            
            <div className="h-full">
                <h1>Instagram Followers</h1>
                <p></p>
            </div>
        </FullScreenDialog>
    );
}

export { AddingServiceDialog }