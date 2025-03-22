// src/utils/useGPT.js
export async function generateSuggestion(prompt) {

    console.log('API KEY:', import.meta.env.VITE_OPENAI_API_KEY)
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    })
  
    const data = await response.json()
    return data.choices?.[0]?.message?.content || '문장 생성 실패'
  }
  