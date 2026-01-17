import { useState } from 'react';
import type { SampleListDTO } from 'src/services/dto';

type SampleDisplayProps = {
  samples: SampleListDTO[];
};

export default function SampleDisplay({ samples }: SampleDisplayProps) {
  const [showSamples, setShowSamples] = useState(true);
  return (
    <>
      {samples.length > 0 && (
        <section>
          <button
            onClick={() => setShowSamples((v) => !v)}
            className="flex items-center gap-2 text-xl font-semibold mb-2"
          >
            サンプル入出力
            <span className="text-sm text-gray-500">
              {showSamples ? '▲' : '▼'}
            </span>
          </button>

          {showSamples && (
            <div className="space-y-4">
              {samples.map((s, idx) => (
                <div
                  key={s.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow"
                >
                  <div>
                    <div className="text-sm font-semibold mb-1">
                      入力 {idx + 1}
                    </div>
                    <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
                      {s.input || '(入力なし)'}
                    </pre>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-1">
                      出力 {idx + 1}
                    </div>
                    <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
                      {s.output}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
