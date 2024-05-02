import { useSelector } from "react-redux";

export default function ThePreview() {
  const currentTab = useSelector((state) => state.tabReducer);
  const preview = useSelector((state) => state.preview);

  const content = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Document</title>
 <style>${currentTab.list[1].content}</style>
  </head>
  <body>
  ${currentTab.list[0].content}
    <script>${currentTab.list[2].content}</script>
  </body>
  </html>
  `

return preview.value ? (
  <div className="w-full h-full">
    <iframe
    width={"100%"}
      srcDoc={content}
      sandbox="allow-scripts"
      className="w-full h-full inline-block"
    ></iframe>
  </div>
) : null;
}
