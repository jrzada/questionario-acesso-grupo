'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Sparkles, Clock, Shield, TrendingUp } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "Quantas horas por semana você estima que perde procurando por produtos de qualidade e fornecedores confiáveis na internet?",
    options: [
      "1-3 horas",
      "4-6 horas", 
      "7-10 horas",
      "Mais de 10 horas (e já me cansei disso)"
    ]
  },
  {
    id: 2,
    question: "Você já se sentiu frustrado(a) por ter comprado um produto que não era o que esperava, ou já perdeu dinheiro com um fornecedor que não era confiável?",
    options: [
      "Sim, e foi muito estressante.",
      "Sim, algumas vezes.",
      "Ainda não, mas tenho medo que aconteça."
    ]
  },
  {
    id: 3,
    question: "Imagine ter acesso a uma lista selecionada de produtos já validados, com links diretos dos melhores fornecedores. O quanto isso facilitaria suas compras ou alavancaria seu negócio?",
    options: [
      "Facilitaria 100%, seria uma virada de jogo.",
      "Me pouparia muito tempo e dor de cabeça.",
      "Me daria a segurança que preciso para comprar/vender mais."
    ]
  },
  {
    id: 4,
    question: "Qual seria o maior benefício para você ao ter acesso a esses links exclusivos: economizar tempo, encontrar produtos com maior potencial de lucro ou ter a segurança de comprar apenas de fontes verificadas?",
    options: [
      "Economizar meu tempo, que é precioso.",
      "Encontrar produtos para lucrar mais.",
      "A segurança de comprar sem risco.",
      "Todos os anteriores."
    ]
  },
  {
    id: 5,
    question: "Sabendo que as melhores ofertas e produtos com alto potencial de venda esgotam rápido, você está pronto(a) para parar de procurar e começar a receber as oportunidades certas diretamente no seu celular?",
    options: [
      "Sim, estou pronto(a) para ter acesso a essas oportunidades!",
      "Sim, cansei de ficar para trás."
    ]
  }
]

export default function QuestionarioPage() {
  const [answers, setAnswers] = useState<{[key: number]: string}>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))

    // Auto-advance to next question after selection
    if (currentQuestion < questions.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1)
        setIsTransitioning(false)
      }, 600) // Smooth transition delay
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentQuestion(prev => prev - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const allQuestionsAnswered = questions.every(q => answers[q.id])
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAccessGroup = () => {
    window.open('https://pay.kiwify.com.br/AeeJCvG', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Questionário Exclusivo</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
            Descubra Seu Perfil de Comprador
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Responda 5 perguntas estratégicas e descubra como podemos <span className="text-purple-400 font-semibold">acelerar seus resultados</span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-300 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-semibold text-purple-300 bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2">
              {Math.round(progress)}% completo
            </span>
          </div>
          <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out shadow-lg relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 mb-8 transition-all duration-500 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 shadow-lg">
                <span className="text-white font-bold text-lg">{currentQuestion + 1}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed flex-1">
                {questions[currentQuestion].question}
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = answers[questions[currentQuestion].id] === option
              return (
                <label 
                  key={index}
                  className={`group flex items-center p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] transform ${
                    isSelected
                      ? 'border-purple-400 bg-gradient-to-r from-purple-500/20 to-pink-500/20 shadow-lg shadow-purple-500/25'
                      : 'border-white/20 hover:border-purple-400/50 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questions[currentQuestion].id}`}
                    value={option}
                    checked={isSelected}
                    onChange={(e) => handleAnswer(questions[currentQuestion].id, e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-6 h-6 rounded-full border-2 mr-5 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'border-purple-400 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                      : 'border-gray-400 group-hover:border-purple-400'
                  }`}>
                    {isSelected && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <span className="text-white font-medium text-lg leading-relaxed flex-1">{option}</span>
                  {isSelected && (
                    <CheckCircle className="w-6 h-6 text-purple-400 animate-bounce" />
                  )}
                </label>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-10">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              currentQuestion === 0
                ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl'
            }`}
          >
            ← Anterior
          </button>

          <div className="text-center">
            <div className="text-gray-400 text-sm mb-2">Seleção automática ativada</div>
            <div className="flex gap-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentQuestion
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="w-32"></div>
        </div>

        {/* Results and CTA */}
        {allQuestionsAnswered && (
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white relative overflow-hidden animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white animate-pulse" />
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                🎉 Parabéns! Perfil Identificado
              </h3>
              
              <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                Baseado nas suas respostas, você é o perfil <span className="font-bold text-white">PERFEITO</span> para nosso grupo exclusivo de oportunidades!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Economia de Tempo</h4>
                  <p className="text-emerald-100">Produtos já validados e testados</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Shield className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Segurança Total</h4>
                  <p className="text-emerald-100">Fornecedores 100% confiáveis</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <TrendingUp className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Máximo Lucro</h4>
                  <p className="text-emerald-100">Oportunidades de alta conversão</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/30">
                <h4 className="text-2xl font-bold mb-4 text-white">🚀 O que você vai receber:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-100 font-medium">✨ Produtos validados diariamente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-100 font-medium">⚡ Links diretos dos fornecedores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-100 font-medium">🎯 Oportunidades que esgotam rápido</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-emerald-100 font-medium">💰 Potencial de lucro maximizado</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAccessGroup}
                className="bg-white text-emerald-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-4 border-white/20 hover:border-white/40 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">🚀 QUERO ACESSO IMEDIATO AO GRUPO!</span>
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-emerald-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Vagas limitadas</span>
                </div>
                <div className="w-1 h-1 bg-emerald-200 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        {Object.keys(answers).length > 0 && !allQuestionsAnswered && (
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6">
            <h4 className="font-bold text-white mb-4 text-lg">📋 Progresso do questionário:</h4>
            <div className="grid grid-cols-5 gap-3">
              {questions.map((q) => (
                <div key={q.id} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    answers[q.id] 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                      : q.id === questions[currentQuestion].id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg animate-pulse'
                        : 'bg-white/10 text-gray-400'
                  }`}>
                    {answers[q.id] ? '✓' : q.id}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    {answers[q.id] ? 'Completa' : q.id === questions[currentQuestion].id ? 'Atual' : 'Pendente'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}