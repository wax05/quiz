import ReactQuill from 'react-quill';

export const QuillEditor = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
            />
            <ReactQuill />
        </>
    );
};
