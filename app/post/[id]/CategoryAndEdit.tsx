import { Post } from "@prisma/client";
import { Editor } from "@tiptap/react";
import React from "react";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { FormattedPost } from "../../type";

type Props = {
  post: FormattedPost;
  isEditable: boolean;
  handleEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  setTempTitle: (title: string) => void;
  tempTitle: string;
  tempContent: string;
  setTempContent: (title: string) => void;
  editor: Editor | null;
};

const CategoryAndEdit = ({
  post,
  isEditable,
  handleEditable,
  title,
  setTitle,
  setTempTitle,
  tempTitle,
  tempContent,
  setTempContent,
  editor,
}: Props) => {
  const handleEnableEdit = () => {
    handleEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || " ");
};
const handleCancelEdit = () => {
    
    handleEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  }
  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-sm font-bold uppercase">
        {post.category}
      </h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={handleCancelEdit   }>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
