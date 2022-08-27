import React from 'react';
import { RedocStandalone } from 'redoc';
import { docService } from '../../services';

export async function getServerSideProps() {
  const spec = docService.getJsonDoc();
  return {
    props: {
      spec,
    },
  };
}

export default function index({ spec }: any) {
  return (
    <div>
      <RedocStandalone
        specUrl={spec}
        options={{
          nativeScrollbars: true,
          theme: {
            logo: {
              maxHeight: '100px',
              maxWidth: '100px',
              gutter: '5px',
            },
          },
        }}
      />
    </div>
  );
}
