<script lang="ts">
    import { onMount } from 'svelte';
  
    let previewImage:any;
    let imageURLs = [
      'https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg',
      'https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg',
      'https://lh3.googleusercontent.com/c7tUM0dYM1PkoQrvvWZ1DDepwD6te_ALcDHcqGuBZWpo7UmyeFhPTgVjmDo9kLnmuvR_7xvA2O_iCniUJQ-_H-3sJcsqo2aEzAylSz2pqWlGM8rslJxEY6cJctBETH6FCL6ZmWrPxhKGo0krGPZSZjT16Q6HJgPKIRDhmZJoQiIUbt1HwR5lFdjaEWYkv_5f_RKW8TY68WIergEgOdKAsOd8VxadO7wVOeDAWN4ivTxBF1vWNnxYgB-_tCNdiQ8VJM_XROe2rni7cSeuEoO3pXU5FNnY7wk-4W6Mm4ozj88v31LazAAe4iQmefeowyrJyz8uOb---sQbl8F-3IFCfnnLscIIv_vMniNQs-F6LanY0Li62HttzmVqGK3OOooPRPwhTWUdGGKy5naBQ1LyooDsPvLq4fHbhoteWDmxas6O8hGHggmeId4jEG-BR0hR27L_QReQouHDqdZUD45y0hlijB700zT7J-VWetpbfaXnEeAS_Jo3KpnCeQxkoG8HA6G_YsDyJzsMSe36wnI1NaKW_FkuLLXfiT2ktzx2D6z1ClcUJ0K0XhrtTE23xHD4hBSGFJTqf_s88vKi4Ri-k1s_XgWkMdEr30-idtfs6_NTbFN5rjyY4WNJTQNvmCoZBddCQE4Y-TSZ_vcbKpj-ZJFXSH3VLpmUb1Aa2Zfln-0fXCUun0pyG-NLmkZAZVsi1Cq-KYpq9V2Y58MJ5kOajUPvk-uJmRMUK3V1FilltHSN9dYrDnTq6_nYE9rpBFqmTKM0HiZpTS-jbRYyTX5YWTCz6fOf4sQ1EHb7M28Nft85nNRu_VlHbGZZPAJk-Gm01ylgiCErFfScC7G8wd2VPEUZclZO63NCsYX_yEf8GNCat9_wug0KOqWDV2lJtlyi8UGWIhc2yOO25FCCrFbZON9fRfLgKGNcng6MNHixfb2Y3foHU4P6xMP7z7VFC3HOTGVPaZbKlI24eGpQ1pQbgNv1iTlGAEMXN5alUPGukjU1NWMKd_zvG3w=w1245-h934-s-no?authuser=2',
    ];
    let images:any = {};
  
    onMount(async () => {
      for (const url of imageURLs) {
        const image = new Image();
        image.src = url;
        images[url] = image;
      }
    });
  
    function showImage(imageURL:any) {
      previewImage = imageURL;
    }
  </script>
  
  <style>
    img {
      max-width: 100%;
      max-height: 40%;
    }
  </style>
<div data-sveltekit-preload-data="off" class="content-center">
  <button on:click={() => showImage(imageURLs[0])}>Show Image 1</button>
  <button on:click={() => showImage(imageURLs[1])}>Show Image 2</button>
  <button on:click={() => showImage(imageURLs[2])}>Show Image 3</button>
  
  {#if previewImage}
    <img src="{previewImage}" alt="Preview" />
  {/if}
</div>