from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import numpy as np

print("model initiating...")
emotion_labels = ['놀람', '분노', '불안', '슬픔', '행복']
model_path = "/home/kong6651/eunsung/best_model_koelectra_감성둘다_20epoch"
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForSequenceClassification.from_pretrained(model_path)
model.eval()
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
print("model initizted!")


def predict_emotion(text):
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=128)
    inputs = {k: v.to(device) for k, v in inputs.items()}
    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.softmax(outputs.logits, dim=1).squeeze().cpu().numpy()
    pred_idx = int(np.argmax(probs))
    return {
        "input": text,
        "predicted_emotion": emotion_labels[pred_idx],
        "probabilities": {emotion_labels[i]: float(p) for i, p in enumerate(probs)}
    }