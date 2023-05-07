<script lang="ts">
    let previewImage:any;
  
    function showImage(imagePath: any) {
      previewImage = imagePath;
    }
  </script>
  
  <style>
    img {
      max-width: 100%;
      max-height: 40%;
    }
  </style>
   <div data-sveltekit-preload-data="off" class="content-center">
  <button on:click={() => showImage('/image1.jpg')}>Show Image 1</button>
  <button on:click={() => showImage('/image2.jpg')}>Show Image 2</button>
  <button on:click={() => showImage('/image3.jpg')}>Show Image 3</button>

  {#if previewImage}
    <img src="{previewImage}" alt="Preview" />
  {/if}
</div>