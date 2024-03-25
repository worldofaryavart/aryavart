import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RichText`.
 */
export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 * 
 * 
 */
const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <Bounded>
    <div className="prose prose-invert prose-lg prose-slate">
      <PrismicRichText
        field={slice.primary.welcome_text}
        components={components}
      />
    </div>
  </Bounded>
  );
};

export default RichText;
