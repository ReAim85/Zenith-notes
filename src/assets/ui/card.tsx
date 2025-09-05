import { CardItems } from "./cardItem";
import type { CardProps } from "./interface/Interfaces";

export const Card = (props: CardProps) => {
  return (
    <div className="border border-slate-300 bg-white w-90 rounded-3xl mb-5 py-8 px-3">
      <CardItems
        title={props.text}
        startIcon={props.startIcon}
        link={props.link}
        date={`Added on ${Date.now}`}
        type={props.type}
        itemId={props.itemId}
        tags={props.tags}
      />
    </div>
  );
};
