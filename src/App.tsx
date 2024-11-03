import { useEffect } from "react";
import { Button, Heading, TextAreaField } from '@aws-amplify/ui-react';

function App() {

  useEffect(() => {
    
  }, []);

  return (
    <main>
      <Heading 
        level={5}
        marginBottom={12}
        color={"white"}
      >
        Input your post
      </Heading>
      <TextAreaField
        descriptiveText=""
        label=""
        name="tweet"
        placeholder=""
        rows={5}
        width={"100%"}
        color={"white"}
        inputStyles={{ color: 'white' }}
        marginBottom={24}
      />
      <Button
        loadingText=""
        onClick={() => {alert("submitting...")}}
        color={"white"}
        className="submit-button"
        isLoading={false}
      >post</Button>
    </main>
  );
}

export default App;
