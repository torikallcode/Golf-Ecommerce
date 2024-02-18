import React from 'react'

export const Remember = ({ Text }) => {
  return (
    <div className="cursor-pointer flex items-center gap-x-2">
      <img className="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASFJREFUSEvtlu0NwiAQhq+b6Ca6iU6iTqJOopvoJtqn4ciVAlpK0j+QNCYN8Lz3Ue/tZKXVrcSVHHjjRB0KxL1FhOeZOpsCn0XkVAAMjwC/9y+5b7Ri4EevdFcBaq9AwNa+CME2UjZfRORWIIIy8VzdL1dwl488BH8chNrsC4DhEYWTwVHUFkwToZB1LIw0phUo5WMRzNBwKTD1QGGNRdQvd5FPtwXb+tb+vrWEDTxUoKW6RkfrHa25Rn8grblacy3JgH5OfurZYRAdX0to7qwdt37qWbAdXxOrskCAtVKeF44/qw44qUk6xYwYtT4YRvVvWevDATaXWNpcUiZWKjbwgQOuYW8nJk/V/TL0mjI193NKTZSzDf0cQNHe2t7qbxFfsNJSH+V9YZsAAAAASUVORK5CYII=" />
      <h1 className="font-utama text-base sm:text-lg lg:text-sm">{Text}</h1>
    </div>
  )
}
