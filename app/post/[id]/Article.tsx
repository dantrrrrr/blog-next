import React from "react";
import MenuEditor from "./MenuEditor";
import { Content, Editor, EditorContent } from "@tiptap/react";

type Props = {
  isEditable: boolean;
  editor: Editor | null;
  contentError: string;
  setContent: (content: string) => void;
  title: string;
};

const Article = ({
  isEditable,
  editor,
  contentError,
  setContent,
  title,
}: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <article className="text-wh-500 leading-8">
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <MenuEditor editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-red-500">{contentError}</p>}
    </article>
  );
};

export default Article;
