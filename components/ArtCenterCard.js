import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MapComponent from "./MapComponent";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useSpeechSynthesis } from "react-speech-kit";

const ArtCenterCard = ({ center }) => {
  const [showMap, setShowMap] = useState(false);
  const { speak, cancel } = useSpeechSynthesis();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.ENLEM},${center.BOYLAM}`;
    window.open(url, "_blank");
  };

  const handleSpeakDescription = () => {
    if (isSpeaking) {
      cancel();
      setIsSpeaking(false);
    } else {
      // If not speaking, start speaking
      speak({ text: center.ACIKLAMA, lang: "tr-TR" });
      setIsSpeaking(true);
    }
  };

  return (
    <Card className="relative w-full h-150 m-5">
      <CardHeader>
        <CardTitle>{center.ADI}</CardTitle>
        <CardDescription>{center.ILCE}</CardDescription>
      </CardHeader>
      <CardContent>
        <Label>{center.ACIKLAMA}</Label>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col items-start w-full">
          <Button className="mb-3 w-36" onClick={handleSpeakDescription}>
            {isSpeaking ? "Duraklat" : "Başlat"} {/* Play-pause button */}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button className="w-36" onClick={toggleMap}>
                Haritada Göster
              </Button>
            </DialogTrigger>
            <DialogContent>
              <MapComponent center={[center.ENLEM, center.BOYLAM]} />
            </DialogContent>
          </Dialog>
          <Button className="mt-3 w-36" onClick={handleGetDirections}>
            Yol Tarifi Al
          </Button>
        </div>
        <div className="flex justify-between w-64">
          <Label>
            {center.MAHALLE} - {center.ILCE}
          </Label>
          <Label></Label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArtCenterCard;
