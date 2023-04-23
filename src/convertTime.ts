
  export function convertTimeOption(time_option: string): string {
    if (time_option == "day") {
      return "σήμερα";
    } else if (time_option == "week") {
      return "της εβδομάδας";
    } else if (time_option == "month") {
      return "του μήνα";
    } else {
      return "από Δεκέμβριο 2022";
    }
  }
  
  import { writable } from 'svelte/store';

export const choice = writable('γράφημα');
