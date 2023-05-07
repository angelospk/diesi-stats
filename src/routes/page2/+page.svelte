<script lang="ts">
    import { onMount } from 'svelte';
  
    let previewImage:any;
    let imageURLs = [
      'https://lh3.googleusercontent.com/urkGQ9N1y9oYXCU80luUsgIQIJy9BSlZs5y5ySHRlykfNcGIV1-yo8kSVu8svJG1ScE2F0--5Bt1BJqQoag8VTK2AlibgvQsExs5TZ701yU4nNwoDeV8dGwrKKjBNflEy2kGWqqDBHilA2IBJ7HVHqvnZPRSAuAgCULA2cjI7IHnqtEd7QlHbVwf9rR6BBu-Q9zrxP3uk_pqccovcFyahWZsLE3kvLeTM2kwUXWHq2O70Hqj3lGx29rNlmBbL1z404k13JDAf9eyOe-hfUhLHNoq-JP_LhMfKG_Yhm9nLPCTCiZd94kQKs2TTCSJL_2dhyUVCuY5G-s5892oq6KX7cHHuUNWyHUKJWH3AcrGY1AJrKUNrHJ1H2_StfTrxgAIQfVXvaBRGfPh82SXWautP34_wWW-4jjHdiGa-2O_WPCwMnuZ_jrQQPJXYdw3hwUcwNCXOOS2qVx3Ru1oepq46pUlIT5HM8feqh8JFugAMNlnK07DxFHP27msz-inEA3mj-vXZd5gtrokOqDpqkund9I0a5QPHs38g-IvsBm7pv8l-fgOqiMqlDzPSTiNCjz362jEtWzQXQjpHlEeBSCK0v9GP7CyQ-PGiim8VUKNcoz57CeBFl3YcahecTlevg9Qy05sPBCHFwMAEBsnibY5BF89xiFx58xR0HcA7_pcNH6egxaGHYQcFY94oBMqJ1TZlaE9rU15chabjPE_l1MZjEyiTd6G-laR5b6zFXzvGUk-iMZHgtqAdwRdTYq1JRASHn-y1ewczk-j421bvt6agR_BcWcoKkwXa-CK2Xm4zU6yQAOZ--y7j0hWwEyWKPrYbTnUxxZJ0fCHDxe6_4tFJ2KM2q_U-6J6BQhjJt2xmCQ60XG5z4LX8RsUTN2mIiKvDsaJdOt2AcBuJDFPtTf8kiP_pH2YMfKyltcu8eFEGJUMEp0mXWYYCUO0aYJdyRpN5jXsFrLRfpnjKemRfowZxQW4hPPTQ6uJmUIuBltz92H3dkd-UR06Lxw=w1245-h934-s-no?authuser=2',
      'https://lh3.googleusercontent.com/1R8zwnUzfXNgRFcYYVFhavVhRgVkntsQz85H9D-MhS8aJL8ngzlSkTe1hPGOQZeBm9-tp1Os7M5TN1APVBYGmH5rlbzTdZ2BvAJCj9cE6k432XJxxFwXRnyhUNraVHJqgsyv-MiDTv45JUc-IOryvZNcA-K0QOS6liRjlFAWWsGub-9Um7_Mevjo4is4WFQ5gxu_mO5c5DZVSFdtYyaTzoCndbLKSsJZ58jZu2eb8TtAUuhq1tM2MfURn_3dukI5Ih0RWrtwfunlI--u7sw-01S3b09w1HE0-kKvPrEh228rp9NAJPTIdVu3SyvW5YOjMj2A6AKnGwR5TM5nGN0TM2hu4Ss8DjiiuNjkNXdSgDZRsVWbxQMBjClT0JWKuhHcOTciVnONTyPZAeILrA7vT9sEK0ObnPcgL6-fJcZAeetujq-QDQAE5u09JuFY49kGzSd_dHmboxqWtCw3F3fi90n6Ph9bj6SjtWtjbQXvXY6Slfb5HGIpP8JA5RKbvebnMUbocCXChMkgI1iXRqKv4ETR-3sXv1xQwZaiYpG3_Ka-4aNeOUE0cUqg_JvGFXHPTxRgQbcnECqSiXwsyuD1GwdMSbWGIbY1Ujdw6p0z0X-y1aJI_bklSmMVVPQDWeYA7BoUGogFwDKy2dMiQjKgeed7kcxkk9EkR_oPbyCS-LCmuyyhUqf1XwfcdTuA8IdIwN1VNq89p0RnN2ITvj1JG4FSwNeb3i1Gc43QYSHwTFTqw-13CosD3PnCY9sfWPu-C2MRmMNZYCKq88lybe3DgaFz5BDF9dApe9HclTqrqK9U9X11N_pJgCzj5AhJ2b7xIB4lQJMppWBYJvClnc47guLM0wjrcxUpRKbOK20C4pck6GbjAotqSSrWhaacaQSMJ6TsxIb5VCYhMvUPjBcLzCeL-Qrk-UgZvUSlMw1gvxyJCGLyx9CSfhfxEuLTREmhOTsf8THwFjtWIQYamZDAQXjC6UtiS-egUAYMhbIFdgdJMoPXOQOIiv0=w699-h934-s-no?authuser=2',
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