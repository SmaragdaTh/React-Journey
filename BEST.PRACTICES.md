# Tips, tricks and best practices for React codebases

## Refactoring a YouTube Component for readability and maintainability

  Initial code:

  ```jsx
  function YTVideo(props){
    return (
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
  }
  ```

  **TIP 1:** When a Component has more than 3 props, or an HTMLElement has more than 3 attributes, it's a good strategy to move each prop/attribute on a newline for quick and easy access.

  **TIP 2:** You can use VSCode Sort Lines (Ascending) to sort the props/attributes for an even quicker and easier access and make git merge conflict resolutions easier.

  **TIP 3:** You can destructure props so that the variables are shorter and easier to read.

  Here's the refactored version of the code above:

  ```jsx
  function YTVideo({ videoId }){

    return (
      <iframe 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen 
        frameBorder="0" 
        height="315" 
        referrerPolicy="strict-origin-when-cross-origin" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title="YouTube video player" 
        width="560" 
        />
    );

  }
  ```