import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-balloon';

import styled from 'styled-components';




const Wrapper = styled.div`
  border:1px solid grey;
  min-height:150px;

  :hover{
    border-color:blue;
  }
  
  > div {
    min-height:150px;
  }
`;




const configuration = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    '|',
    'indent',
    'outdent',
    '|',
    'blockQuote',
    'insertTable',
    'mediaEmbed',
    'undo',
    'redo'
  ],
  displayWords: true,
  placeholder: 'Write some text...'
};

const Editor = ({ onChange, name, value }) => {

  return (
    <Wrapper>

      <CKEditor
        editor={ClassicEditor}
        config={configuration}
        data={value} 
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />

    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;