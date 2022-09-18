import CloudWithLightningAndRain from "@/assets/icons/cloud-with-lightning-and-rain.svg";
import CloudWithLightning from "@/assets/icons/cloud-with-lightning.svg";
import CloudWithRain from "@/assets/icons/cloud-with-rain.svg";
import CloudWithSnow from "@/assets/icons/cloud-with-snow.svg";
import Cloud from "@/assets/icons/cloud.svg";
import SunBehindCloud from "@/assets/icons/sun-behind-cloud.svg";
import Sun from "@/assets/icons/sun.svg";
import Fog from "@/assets/icons/fog.svg";

const codes = {
  0: Sun,
  1: SunBehindCloud,
  2: SunBehindCloud,
  3: Cloud,
  45: Fog,
  48: Fog,
  51: CloudWithRain,
  53: CloudWithRain,
  55: CloudWithRain,
  56: CloudWithRain,
  57: CloudWithRain,
  61: CloudWithRain,
  63: CloudWithRain,
  65: CloudWithRain,
  66: CloudWithRain,
  67: CloudWithRain,
  71: CloudWithSnow,
  73: CloudWithSnow,
  75: CloudWithSnow,
  77: CloudWithSnow,
  80: CloudWithRain,
  81: CloudWithRain,
  82: CloudWithRain,
  85: CloudWithRain,
  86: CloudWithRain,
  95: CloudWithLightning,
  96: CloudWithLightningAndRain,
  99: CloudWithLightningAndRain,
};

export function useMeteoIcon(weatherCode) {
  return codes[weatherCode];
}
