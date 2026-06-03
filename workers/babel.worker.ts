import { transform } from "@babel/standalone";
import { BabelTransforms } from "@constants/babelTransforms";
import objStylesToTemplate from "babel-plugin-object-styles-to-template";

const _self: any = self;

interface Data {
  id: string;
  payload: {
    value: string;
    type: BabelTransforms;
    settings?: any;
  };
}

function objectStylesToTemplate(value, id, settings) {
  _self.postMessage({
    id,
    payload: transform(value, {
      plugins: [[objStylesToTemplate, settings]]
    }).code
  });
}

_self.onmessage = ({ data: { id, payload } }: { data: Data }) => {
  const { value, type, settings } = payload;

  try {
    if (type === BabelTransforms.OBJECT_STYLES_TO_TEMPLATE) {
      objectStylesToTemplate(value, id, settings);
    }
  } catch (e) {
    if (IS_DEV) {
      console.error(e);
    }
    _self.postMessage({
      id,
      err: e.message
    });
  }
};
