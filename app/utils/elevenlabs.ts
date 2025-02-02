import axios from 'axios';

export const synthesizeSpeech = async (
  text: string,
  voiceId: string
): Promise<ArrayBuffer> => {
  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${2dhHLsmg0MVma2t041qT}`,
    {
      text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5
      }
    },
    {
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': process.env.ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    }
  );
  
  return response.data;
}; 