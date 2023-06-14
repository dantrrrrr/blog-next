"use client";
import { FormattedPost } from "@/app/type";
import React, { useState } from "react";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SocialLinks from "@/app/(share)/SocialLinks";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuEditor from "@/app/post/[id]/MenuEditor";
import CategoryAndEdit from "@/app/post/[id]/CategoryAndEdit";
import Article from "./Article";
type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const date = new Date(post?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(post.content);
  const [tempContent, setTempContent] = useState<string>(content);
  const [contentError, setContentError] = useState<string>("");

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) {
      setContentError("");
    }
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: handleOnChangeContent,
    editable: isEditable,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
  });
  const handleEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };
  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) {
      setTitleError(" ");
    }
    setTitle(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check validation
    if (title === "") {
      setTitleError("This field is required !");
    }
    if (editor?.isEmpty) {
      setContentError("This field is required !");
    }
    if (title === "" || editor?.isEmpty) {
      return;
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      }
    );
    const data = await response.json();
    handleEditable(false);
    setTempTitle(" ");
    setTempContent(" ");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };
  return (
    <div className="prose w-full max-w-full mb-10">
      {/* breadcrumbs */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      {/* category and edit */}
      <CategoryAndEdit
        isEditable={isEditable}
        handleEditable={handleEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />
      <form onSubmit={handleSubmit}>
        {/* header */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={handleOnChangeTitle}
                value={title}
              ></textarea>
              {titleError && (
                <p className="mt-1 text-red-500 ">{titleError} </p>
              )}
            </div>
          ) : (
            <h2 className="font-bold text-3xl mt-3">{title}</h2>
          )}
          <div className="flex gap-3 ">
            <h5 className="font-semibold">By {post.author}</h5>
            <h6 className="text-wh-300 text-sx">{formattedDate}</h6>
          </div>
        </>
        {/* image */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill={true}
            sizes="(max-width:480px) 100vw,
          (max-width:768px) 75vh,
          (max-width:1060px) 50vh,
          30vw
          "
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* ediror */}
        <Article
          contentError={contentError}
          editor={editor}
          isEditable={isEditable}
          setContent={setContent}
          title={title}
        />
        {/* Submit button */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>
      {/* social Link */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
